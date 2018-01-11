var Name = "";
       
window.onload = function() {

getName()
}
        
        function save(){
            Name = document.getElementById("username").value;
            localStorage.setItem("name", Name);  
        }
            
        function getName(){ 
            Name = localStorage.getItem("name");
            console.log(Name)
            document.getElementById("namebox").innerHTML = "Welcome " + Name;
        }     