
// window.localStorage.clear();
window.onload=get_data();
let tasklist=[];
let compeletetasks=[];
let counter=0;
function cheack_input()
{
    let input=document.getElementById("inp").value;
    if(input=="")
    {
        document.getElementById("inp").placeholder="Please Enter Your Task";
    }
    else
    {
      tasklist.push(input);
      addtask(input,false,counter);
      
      compeletetasks.push("notcompelete!!");
      save_task();
      counter++;
    }
}
function addtask(input,c,count1)
{
    
  
    let mydiv=document.createElement("div");
    mydiv.classList.add("maindiv");
    let mydiv2=document.createElement("div");
    mydiv2.classList.add(`div2`);
    mydiv2.setAttribute('id', count1);
    let icon=document.createElement("div");
    icon.innerHTML='<i class="fa-regular fa-circle-check check"></i>';
    icon.classList.add("true");
    let icondele=document.createElement("button");
    icondele.classList.add("dele");
    let p=document.createElement("p");
    if(c)
    {
        p.classList.add("line");
        icon.classList.add("sign");
    }
    p.innerHTML=input;
    mydiv2.append(icon);
    mydiv2.append(p);
    mydiv.appendChild(mydiv2);
    mydiv.appendChild(icondele);
    icondele.innerHTML='<i class="fa-solid fa-xmark"></i>';
    // tasklist.push(mydiv);
    // console.log(tasklist);
    document.getElementById("bigcontainer").append(mydiv);
    document.getElementById("inp").value="";
//    save_tasks(tasklist);
    
     deletediv()
    done();
    
    }
   

  
    
   function  done(){
    let all_p = document.querySelectorAll(".div2");
    for(var i=0;i<all_p.length;i++)
    {
        all_p[i].onclick=function()
        {
            let child2=this.children[1];
            if(child2.classList.contains("line"))
            {
                // console.log(this.getAttribute("id"));
                compeletetasks[this.getAttribute("id")]=("notcompelete!!");
                child2.classList.remove("line");
            }
            else
            {
                // console.log(this.getAttribute("id"));
                compeletetasks[this.getAttribute("id")]=(child2.innerHTML);
                // console.log(compeletetasks[this.getAttribute("id")]);
                child2.classList.add("line");
            }
            let child1=this.children[0];
            if(child1.classList.contains("sign"))
            {
                child1.classList.remove("sign");
            }
            else
            {
                child1.classList.add("sign"); 
            }
            save_task();
        }
    }
}


// setInterval(deletediv(),1000);
// setInterval(done(),1000);
function deletediv(){
    let buttons=document.querySelectorAll("button.dele");
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].onclick=function()
        {
            let classes =this.parentNode;
            classes.classList.add("hide");
            let pargraph=classes.firstChild;
            let text=pargraph.lastChild.innerHTML;
           
            tasklist=tasklist.filter(elme=>elme!==text);
            counter--;
           compeletetasks[pargraph.getAttribute("id")]="notcompelete!!";
            save_task();
        }
       
    }
   }
if(window.localStorage.length>0)
{
    tasklist = JSON.parse(window.localStorage.getItem("tasks"));
    compeletetasks = JSON.parse(window.localStorage.getItem("compelete"));
    counter= JSON.parse(window.localStorage.getItem("count"));
}
function save_task()
{
    window.localStorage.setItem("tasks",JSON.stringify(tasklist));
    window.localStorage.setItem("compelete",JSON.stringify(compeletetasks));
    window.localStorage.setItem("count",JSON.stringify(counter));
}
function get_data()
{
    
    if(window.localStorage.length>0){
    let tasklist2 = JSON.parse(window.localStorage.getItem("tasks"));
    let compeletetask=JSON.parse(window.localStorage.getItem("compelete"));
    let count=JSON.parse(window.localStorage.getItem("count"));
       for(let i=0;i<count;i++)
       {
        if(typeof(tasklist2[i])=='string')
        {
            if(compeletetask[i]=="notcompelete!!")
            addtask(tasklist2[i],false,i);
            else
            addtask(tasklist2[i],true,i);

        }
       }
    }
    else
    {

    }

}