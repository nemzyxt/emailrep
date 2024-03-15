const baseUrl = "https://emailrep.io"

const getEmailReputation = async (email) => {
    try {
        const response = await fetch(`${baseUrl}/${email}`)
        const responseData = await response.json()
        if(!response.ok) {
            throw new Error(responseData.reason)
        }
        return { success:true, details:responseData.details }
    } catch(err) {
        return { success:false, error:err }
    }
}

module.exports = {
    getEmailReputation
}
