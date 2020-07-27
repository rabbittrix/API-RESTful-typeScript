import NewsService from "../services/newsService";
import * as httpStatus from "http-status";
import Helper from "../infra/helper";

class NewsController{
   get(req, res){
    NewsService.get()
      .then(news => Helper.sendResponse(res, httpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  getById(req, res){
    const _id = req.params.id;
    NewsService.getById(_id)
      .then(news => Helper.sendResponse(res, httpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  create(req, res){
    let vm = req.body;
    NewsService.create(vm)
      .then(news => Helper.sendResponse(res, httpStatus.OK, "News successfully registered!"))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  update(req, res){
    const _id = req.params.id;
    let news = req.body;
    NewsService.update(_id, news)
      .then(news => Helper.sendResponse(res, httpStatus.OK, 'has been successfully updated!'))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  delete(req, res){
    const _id = req.params.id;
    NewsService.delete(_id)
      .then(() => Helper.sendResponse(res, httpStatus.OK, 'News successfully deleted!'))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new NewsController();