import mongoose, { model ,  Schema , models} from "mongoose";
delete (mongoose.connection as any)?.models['Page'];

const PageSchema = new Schema({
    name : {type: String , required : true},
    slug : {type: String , required : true},
    date : {type: String , required : true},
    content: {
        assets: {
          type: Array,
          required: false,
        },
        styles: {
          type: Array,
          required: false,
        },
        pages: {
          type: Array,
          required: false,
        },
      },
})

export const page = models?.page || model('Page', PageSchema);