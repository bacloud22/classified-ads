import { useContext, useEffect, useState } from "react"
import { io } from "socket.io-client"
import Context from "./Context"

export default function Container () {
    const {user, setUser} = useContext(Context)

    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const newSocket = new io('http://localhost:5000')
        setSocket(socket)
        setUser(null)
        return () => newSocket.close()
    }, [setSocket])
    return (
        <div className="container mx-auto">
            <h1 className="text-3x1 font-bold text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-b py-3 mb-5">
                {user ? `Chatting as ${user.name}`: 'Chat as ...'}
            </h1>
            {user && socket && socket.connected ? (<div>connected</div>) : null}
            {!user && socket ? (<div>not connected</div>) : null}
        </div>
    )
}