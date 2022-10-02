import axios from "axios";

const headers = { 
  headers: {
     "Content-Type": "application/json; charset=utf-8",
  }
}

const PRODUCTS = "https://api.alibaraka.com/api/products/";                 
const CATEGORY = "https://api.alibaraka.com/api/categories/";                 // bo'limlar
const QUESTIONS = "https://api.alibaraka.com/api/questions/";                 // hududlar
const LINKS = "https://api.alibaraka.com/api/links/";                        // 1ta yangilikni qaytaradi newsInfo
const BLOGS = "https://api.alibaraka.com/api/blogs/";             // faqat videolar yuboradi
const IMAGES = "https://api.alibaraka.com/api/images/";            // 1ta xodim haqida malumot beradi
const PARTNERS = "https://api.alibaraka.com/api/partners/";                         // Eng ko'p o'qilganlar
const PRODCT_BY_CATEGORY = "https://api.alibaraka.com/api/product_by_category/";            // 1ta audio news qaytaradi
const BLOG_LAST = "https://api.alibaraka.com/api/blog_last/";                     // all audio newslarni qaytaradi
const CONFIG = "https://simply.uz/api/config";                     // sosical tarmoqlaR/barcha yngliklr

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