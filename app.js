var expense = document.getElementById('expense')//섹션 계좌 정보
var expenseOpen = document.getElementById('expenseOpen')//계좌 오픈 버튼
var expenseClose = document.getElementById('expenseClose')//계좌 닫기 버튼

expenseOpen.onclick=function(){
  expense.style.display="block";
}
expenseClose.onclick=function(){
  expense.style.display="none"
}
