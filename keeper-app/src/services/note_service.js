import http from "../http-common";
class NoteDataService{
  getAll(){
    return http.get("/notes");
  }
  addNote(data){}
}