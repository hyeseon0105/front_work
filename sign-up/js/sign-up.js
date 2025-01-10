
      function check(){
        // 입력한 내용을 사라지지 않게 유지하는 함수
        event.preventDefault();
       const uderd = document.querySelector('#uid');
       const email = document.querySelector('#email');
       const password = document.querySelector('#pwd1');
       const confirmpassword = document.querySelector('#pwd2');

       const path = document.querySelector('#path');
       const memo = document.querySelector('#memo');
       const maillling = document.getElementsByName('maillling');
       const mail = document.querySelector('#mail');

      //  메일 수신 여부를 검사 > 리턴 값 결정
      let maillReceive;

      maillling.forEach((x) => {
        if(x.checked){
          maillReceive =x.value
          
        }
      })
      // 1. 아이디가 4자~10자 사이인지 확인
      if(uid.value.length < 4 || uid.value.length > 10){
        alert('4~10자 사이로 입력해주세요.')
        uid.value='';
        uid.focus();
      }
      // 2.이메일이 비었는지 확인
      if(email.value.length == 0) {
        alert('이메일이 비었습니다. 입력해주세요.')
        // 비우고 
        email.value = '';
        // 포커스주기
        email.focus();
      }
      // 3.비밀번호와 비밀번호 확인 두 값이 같은지 확인
      if(password.value != confirmpassword.value){
        alert('비밀번호와 같은지 확인하세요.')
        password.value ='';
        confirmpassword.value ='';
        password.focus();
      }
          
      //  alert(uderd.value);
       console.log('User-ID : '+uderd.value);
       console.log('Email : ' + email.value);
       console.log('Password : ' + password.value);
       console.log('가입경로 : ' + path.value);
       console.log('memo : ' + memo.value);
       console.log('maillReceive : ' + maillReceive);
       console.log('ok');

      }
      
