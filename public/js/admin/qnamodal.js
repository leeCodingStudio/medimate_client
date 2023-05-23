const Q_NUM = document.getElementById('Q_NUM')
const Q_TITLE = document.getElementById('Q_TITLE')
const Q_CONTENT = document.getElementById('Q_CONTENT')


function modal(data){
    const qna = JSON.parse(data);
    Q_NUM.value = qna.Q_NUM,
    Q_TITLE.value = qna.Q_TITLE,
    Q_CONTENT.value = qna.Q_CONTENT
}