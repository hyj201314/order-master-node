function People(name){
    this.name = name;
}

People.prototype.save = function(){
    var name = this.name;
    localStorage.setItem('name_input',name);
};