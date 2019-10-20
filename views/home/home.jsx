import React from 'react';

class Home extends React.Component{


    render(){
        let emailInput = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline'
        }

        return(
            <html>
                <head>
                </head>
                <body>
                    <div>
                        <h1>Hello World</h1>
                    </div>
                    <h4>Add teacher email</h4>
                    <form method='POST' action='/addteacher'>
                        <div style={emailInput}>
                            <input name='email' type='text' placeholder='enter email address'/>
                            <p>@school.com</p>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                    <h4>Add student email</h4>
                    <form method='POST' action='/addstudent'>
                        <div style={emailInput}>
                            <input name='email' type='text' placeholder='enter email address'/>
                            <p>@school.com</p>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </body>
            </html>

        )
    }
}

export default Home;