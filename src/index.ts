import express,  {type Request, type Response} from 'express'

const PORT = process.env.PORT || 3000
const app = express()



app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})