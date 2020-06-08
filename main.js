const musicLinK = document.querySelector('.music-link');

musicLinK.addEventListener('click', reportMachine);

function reportMachine (){
    return document.write(
        `
        <style>
        *{
            margin:0;
            padding:0;
        }
        .error{
           background:#eee;
           position:absolute;
           font-family:sans-serif;
           top:0;
           bottom:0;
           left:0:
           right:0;
           width:100%;
           display:grid;
           justify-items: center;
           align-items:center;
           font-size:4em;
           font-weight:bold;
        }
        </style>
        <div class="error">
            <div>Error: App not created Yet...</div>
        </div>`
    );
}