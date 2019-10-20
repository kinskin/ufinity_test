import React from 'react';

class New extends React.Component{

    render(){

        return(
            <html>
                <head>
                </head>
                <body>
                    <h1>Hello world</h1>
                    <h4>Add teacher</h4>
                    <form method='POST' action='/teachers'>
                    <p>Name: </p>
                    <input type='text' name='teacherName' placeholder='name'/>
                    <p>Email: </p>
                    <input type='text' name='teacherEmail' placeholder='email'/>
                    <br/>
                    <input type='submit'/>
                    </form>
                </body>
            </html>
        )
    }
}

export default New;