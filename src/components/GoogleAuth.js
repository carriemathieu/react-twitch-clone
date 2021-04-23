import React from 'react'

class GoogleAuth extends React.Component{
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '864009375021-dkasb4ca7d2gju5fk9k1mffd4n55drp6.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return (
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth