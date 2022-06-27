
let boards = [];
let selectedindex1 = -1;
let selectedindex2 = -1;
let selectedindex3 = -1;

function showCard() {
    document.getElementById("card").classList.toggle("d-none");
}
console.log(document.getElementById("card").classList);

function addBoard() {
    let boardTitle = document.getElementById("board-title").value;


    if (boardTitle.length > 0){
        document.getElementById("board-title").value = "";

        let newBoard = {
            title: boardTitle,
            tasks: []
        };

        if (selectedindex1 >= 0){
            boards[selectedindex1].title = boardTitle;
            selectedindex1 = -1;
        }else{
            boards.push(newBoard);
        }


        drowBoards();

    }else {
        alert("Malumot kiriting!!!")
    }

    
}


function drowBoards() {
    let result = "";

    for (let i = 0; i < boards.length; i++){

        let result2 = "";

        for (let j = 0;j < boards[i].tasks.length; j++){
            result2 +=
                "<div class='task'><span onclick='editTask("+ i +","+ j +")'>"+ boards[i].tasks[j] +"</span><div class='task-close' onclick='deleteTask("+ i +","+ j +")'>&times;</div></div>"
        }

        result +=
            "<div class='col-4 mb-3'>" +
            "<div class='card'><div class='task-close-card' onclick='deleteCard("+ i +")'>&times;</div>" +
                "<div class='card-header'><h6 onclick='editCard("+ i +")'>"+ boards[i].title +"</h6></div>" +
                "<div class='card-body'>"+ result2 +"</div>" +
                "<div class='card-footer'>" +
                    "<textarea id='task-title"+ i +"' class='form-control' placeholder='Type here'></textarea>" +
                    "<button type='button' class='btn btn-success mt-4 d-block ml-auto' onclick='addTask("+ i +")'>Add</button>" +
                "</div>" +
            "</div>" +
            "</div>"
    }

    document.getElementById("result").innerHTML = result;
}

function addTask(index) {
    let taskTitle = document.getElementById("task-title" + index).value;

    if (selectedindex2 >= 0){
        boards[selectedindex2].tasks[selectedindex3] = taskTitle;
        selectedindex2 = -1;
        selectedindex3 = -1;
    }else {
        boards[index].tasks.push(taskTitle);
    }

    console.log(boards);
    drowBoards();


}

function deleteTask(index1, index2) {
    boards[index1].tasks.splice(index2, 1);
    drowBoards();
}

function deleteCard(index3) {
    boards.splice(index3, 1);
    drowBoards();
}

function editCard(index4) {
    document.getElementById("board-title").value = boards[index4].title;
    selectedindex1 = index4;

}
function editTask(index5, index6) {
    document.getElementById('task-title'+index5).value = boards[index5].tasks[index6];
    selectedindex2 = index5;
    selectedindex3 = index6;

}