import {connect , disconnect} from "mongoose"
async function connectToDatabase(){
    try {
        await connect (process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
        throw new Error ("Cannot Connect To Database")
    }
}
async function disconnectToDatabase(){
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error ("Could not Disconnect To Database")
    }
}
export {connectToDatabase , disconnectToDatabase}