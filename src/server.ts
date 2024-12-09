import 'dotenv/config'
import app from './app';
import { createTables, startDatabase } from "./database";

const PORT: number = Number(process.env.PORT) || 3000

app.listen(PORT, async (): Promise<void> => {
  await startDatabase()
  await createTables()
  console.log(`App running on port ${PORT}`)
})