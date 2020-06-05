var row_count = 1;
var col_count = 1;
var I = 0;
var IRtd = 1;

var tds = document.querySelectorAll('td');
function addRow(){
    row_count++;
    IRtd++;
    $('#w').append('<tr id = "'+row_count+'"></tr>');
    for(i = 0; i < col_count; i++){
        $('#' + row_count).append('<td id = "'+(i+1)+'s" ></td>');

    }

    tds = document.querySelectorAll('td');
    for(var i = 0; i < tds.length; i++){
        tds[i].addEventListener('dblclick', f);
    }
    localStorage.setItem("iR", row_count);
    
}
function remRow(){
    if(row_count == 1) return;
    if($('#' + row_count).text() != '')
    del = true;

    if(del){
        if(confirm("В удаляемых полях остались ячейки с текстом! Вы действительно хотите их удалить?")){
            
        }
        else{
            return;
        }
    
    }
    var attr = $('#' + row_count);
    $(attr).remove();

    row_count--;
    IRtd--;
    localStorage.setItem("iR", row_count);
    del = false;
}
function addCol(){
    var ICtd = 1;
    col_count++;

        $("#T tr").append('<td id = "'+col_count+'s" ></td>');
        tds = document.querySelectorAll('td');
        for(var i = 0; i < tds.length; i++){
            tds[i].addEventListener('dblclick', f);
        }
        localStorage.setItem("iC", col_count);
}
var del = false;
function remCol(){

    if(col_count == 1) return;
    for(i = 0; i < row_count; i++){
        if($('#' + col_count + 's').text() != '')
            del = true;
    }
    if(del){
        if(confirm("В удаляемых полях остались ячейки с текстом! Вы действительно хотите их удалить?")){
            
        }
        else{
            return;
        }
    
    }
    for(i = 0; i < row_count; i++){
        attr = $('#' + col_count + 's');
        $(attr).remove()
    }
    col_count--;   
    localStorage.setItem("iC", col_count);
    del = false;
}
function f(){
    tds = document.querySelectorAll('td');    
    var input = document.createElement('input');
    $(input).css({"width": $('td').css("width")});
    $(input).css({"height": $('td').css("height")});
    input.value = this.innerHTML;
    this.innerHTML = '';
    this.appendChild(input);
    var self = this; 

    input.addEventListener('blur', function(){
        self.innerHTML = this.value;
        self.addEventListener('dbclick', f);
        localStorage.setItem(self.id, this.value);
    });
    this.removeEventListener('dbclick', f);
}

function loadTable(){
    var iR = localStorage.getItem("iR");
    var iC = localStorage.getItem("iC");
    var key;
    var val;
    var ids = new Array();
    var vals = new Array();
    for(i = 0; i < iR-1; i++)
        addRow();
    for(i = 0; i < iC - 1; i++){
        addCol();
    }
    for(i = 0; i < localStorage.length; i++){

        for(var k = 0; k < localStorage.length; k++){
    
        if(localStorage.key(i) == k + 's'){
           ids[i] = localStorage.key(i);
           vals[i] = localStorage.getItem(ids[i]);
           console.log(ids[i] + " | " + vals[i]);
        }
    }
    // key = localStorage.key(i);
    // val = localStorage.getItem(key);
    // console.log(key + " | " + val);
    // $('#'+ key).text(val);
    // }
    }
}   