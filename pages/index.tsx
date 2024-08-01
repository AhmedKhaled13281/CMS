import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "grapesjs/dist/css/grapes.min.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import TableData from "@/Components/tableComponents/TableData";
import SaveModal from "@/Components/SaveModal";
import Pagination from "react-bootstrap/Pagination";
//import '../styles/globals'

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const [pagesList, setPagesList] = useState(props.pages || []);
  const [reqStatus, setReqStatus] = useState<Boolean>(false);
  const [filteredData, setFilteredData] = useState(pagesList);
  const [term, setTerm] = useState<string>("");

  const [active, setActive] = useState(1);

  const handleSubmit = async (value: any) => {
    //e.preventDefault();
    const pageName = value;
    if (!pageName) {
      return;
    } else {
      try {
        const res = await fetch("/api/getAllPageNames.api", {
          method: "POST",
          body: JSON.stringify(pageName),
          headers: { "Content-Type": "application/json" },
        });
        setReqStatus(res.ok);
        console.log(res);
      } catch (error: any) {
        console.log(error);
      }
      console.log(pageName);
    }

    //value = "";
  };

  const handleDeletePage = async (id: string) => {
    console.log(id);
    try {
      const res = await fetch("/api/getAllPageNames.api", {
        method: "DELETE",
        body: JSON.stringify(id),
        headers: { "Content-Type": "application/json" },
      });
      setReqStatus(res.ok);
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPages = async () => {
      try {
        const res = await fetch("/api/getAllPageNames.api");
        const data = await res.json();
        setPagesList(data);
        setReqStatus(false);
        setFilteredData(data);
        console.log(pagesList);
      } catch (error) {
        console.log("Error Message : ", error);
      }
    };
    getPages();
  }, [reqStatus]);

  const handleSearchInput = (e: any) => {
    const termValue = e?.target?.value;
    setTerm(termValue);
  };

  useEffect(() => {
    if (term.length != 0) {
      pagesList?.forEach((data: any) => {
        if (data.name.toLowerCase() === term.toLowerCase()) {
          let newArr = [];
          newArr.push(data);
          setFilteredData(newArr);
          return data;
        }
      });
    } else {
      setFilteredData(pagesList.slice(start, end));
    }
  }, [term]);

  const pageSize = 6;
  let numberOfPages = Math.ceil(pagesList.length / pageSize);
  var start = (active - 1) * pageSize;
  var end = start + pageSize;

  useEffect(() => {
    setFilteredData(pagesList.slice(start, end));
    console.log(pagesList.slice(start, end));
  }, [pagesList, numberOfPages, active]);

  const nextButton = () => {
    if (active != numberOfPages) {
      setActive(active + 1);
    } else {
      setActive(numberOfPages);
    }
  };

  const prevButton = () => {
    if (active == numberOfPages) {
      setActive(active - 1);
    } else {
      setActive(1);
    }
  };

  console.log(active);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.tableContainer}`}>
        {/* <div className="w-25 m-auto d-flex justify-content-center align-content-center">
          <img className="w-100" src="https://dynamic.design.com/preview/logodraft/127f1eee-013e-4589-bcd5-30bc024c1a6e/image/large.png"/>
        </div> */}
        <div className="container">
          <div className={`${styles.tableWebContent}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4>Web Content</h4>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex me-3">
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Search"
                    value={term}
                    onChange={handleSearchInput}
                  />
                </div>
                <SaveModal
                  handleSaveSection={handleSubmit}
                  modalTitle="+"
                  inputType="field"
                  modalDescription="Create a New Page"
                />
              </div>
            </div>
            <TableData
              tableData={filteredData}
              handleDeletePage={handleDeletePage}
            />
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <p className="text-secondary">
            Showing {end} of {pagesList.length}
          </p>
          <Pagination className="mt-3 d-flex justify-content-end">
            <Pagination.Prev onClick={() => prevButton()} />
            <Pagination.Next onClick={() => nextButton()} />
          </Pagination>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/getAllPageNames.api");
  const data = await res.json();

  return {
    props: {
      pages: data,
    },
  };
}
