function  user1SendMsg(){

    var LMsg = document.getElementById("user1Msg");

    //user enters empty message then exit
    if (LMsg.value.trim() === '')
      return;

    //create container for msg and date  
    var LmyMsgDiv = document.createElement("div");
    var LmyMsgDateDiv = document.createElement("div");

    //set css for the div 
    LmyMsgDiv.setAttribute("id","user1msgSending");
    LmyMsgDateDiv.setAttribute("id","user1msgSendingDate");
    
    //add text node in the msg container
    var LMsgText = document.createTextNode(LMsg.value);
    LmyMsgDiv.appendChild(LMsgText);

    var LDateText = document.createTextNode(formatDate(new Date()));
    LmyMsgDateDiv.appendChild(LDateText);
    
    //get the chat window element of user1 where to add msg as sender's msg. 
    var LUserChat = document.getElementById("user1Chat"); 
    
    //add msg and date to the user1's chat window.
    LUserChat.appendChild(LmyMsgDiv);
    LUserChat.appendChild(LmyMsgDateDiv);


    //creating a element to add msg and date on receving users chat window.
    var LThereMsgDiv = document.createElement("div");
    var LThereMsgDateDiv = document.createElement("div");

    //adding css for the element.
    LThereMsgDiv.setAttribute("id","user2msgReceiving");
    LThereMsgDateDiv.setAttribute("id","user2msgReceivingDate");
    
    var LMsgTextThere = document.createTextNode(LMsg.value);
    LThereMsgDiv.appendChild(LMsgTextThere);

    var LDateText2 = document.createTextNode(formatDate(new Date()));
    LThereMsgDateDiv.appendChild(LDateText2);

    var LUserChat2 = document.getElementById("user2Chat");

    //adding element to the chat window of receiving user
    LUserChat2.appendChild(LThereMsgDiv);
    LUserChat2.appendChild(LThereMsgDateDiv);

    //clearing text box after sending msg.
    LMsg.value = ''; 
}	       

//this function will return date in a format 22 January 2020
function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

function  user2SendMsg(){

    var LMsg = document.getElementById("user2Msg");

    //user enters empty message then exit
    if (LMsg.value.trim() === '')
      return;

    //create container for msg and date
    var LmyMsgDiv = document.createElement("div");
    var LmyMsgDateDiv = document.createElement("div");

    //add css to the container
    LmyMsgDiv.setAttribute("id","user2msgSending");
    LmyMsgDateDiv.setAttribute("id","user2msgSendingDate");

    var LMsgText = document.createTextNode(LMsg.value);
    LmyMsgDiv.appendChild(LMsgText);

    var LDateText = document.createTextNode(formatDate(new Date()));
    LmyMsgDateDiv.appendChild(LDateText);

    var LUserChat = document.getElementById("user2Chat"); 
    
    LUserChat.appendChild(LmyMsgDiv);
    LUserChat.appendChild(LmyMsgDateDiv);

    var LThereMsgDiv = document.createElement("div");
    var LThereMsgDateDiv = document.createElement("div");

    LThereMsgDiv.setAttribute("id","user1msgReceiving");
    LThereMsgDateDiv.setAttribute("id","user1msgReceivingDate");
    
    var LMsgTextThere = document.createTextNode(LMsg.value);
    LThereMsgDiv.appendChild(LMsgTextThere);

    var LDateText2 = document.createTextNode(formatDate(new Date()));
    LThereMsgDateDiv.appendChild(LDateText2);

    var LUserChat2 = document.getElementById("user1Chat");

    LUserChat2.appendChild(LThereMsgDiv);
    LUserChat2.appendChild(LThereMsgDateDiv);

    //clearing text box after sending msg.
    LMsg.value = '';
}	       
