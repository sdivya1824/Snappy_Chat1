ifUserIsLoggedIn(function(){
  updateUserData();

  loadUsers(function(users){

    var usersList="";
    for(var uid in users){
      var user=users[uid];
      if(window.currentUser.id != uid){
        usersList+=renderUserItem(user);
      }
    }
    getElement("members").innerHTML=usersList;
  });

  onClickMultiple("member-list",function(element){
    var chat_id=element.id;
    getElement("chat-id").value = chat_id;
    loadMessages(chat_id,function(messages){
      var messagesList="";
      for(var uid in messages){
        var message=messages[uid];

        messagesList+=renderMessage(message);

      }
      getElement("messages").innerHTML=messagesList;


    });

  });

  click("send-button",function(){
    var text = getElement("chat-message").value;
    var chat_id = getElement("chat-id").value;
    sendMessage(chat_id,text);

  });
});
