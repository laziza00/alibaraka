import axios from "axios";

const headers = { 
  headers: {
     "Content-Type": "application/json; charset=utf-8",
  }
}

const PRODUCTS = "https://api.alibaraka.com/api/products/";                 
const CATEGORY = "https://api.alibaraka.com/api/categories/";             
const QUESTIONS = "https://api.alibaraka.com/api/questions/";               
const LINKS = "https://api.alibaraka.com/api/links/";     
const BLOGS = "https://api.alibaraka.com/api/blogs/";             
const IMAGES = "https://api.alibaraka.com/api/images/";  
const PARTNERS = "https://api.alibaraka.com/api/partners/";   
const PRODCT_BY_CATEGORY = "https://api.alibaraka.com/api/product_by_category/";    
const BLOG_LAST = "https://api.alibaraka.com/api/blog_last/";                   


const GET = {
  products: () => axios.get(PRODUCTS, headers),
  category: () => axios.get(CATEGORY, headers),
  questions: () => axios.get(QUESTIONS, headers),
  links: () => axios.get(LINKS, headers),
  blogs: () => axios.get(BLOGS, headers),
  images: () => axios.get(IMAGES, headers),
  partners: () => axios.get(PARTNERS, headers),
  product_by_category: () => axios.get(PRODCT_BY_CATEGORY, headers),
  blog_last: () => axios.get(BLOG_LAST, headers),
  config: () => axios.get(CONFIG, headers),
}

export default GET;