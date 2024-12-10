import { hash } from "bcryptjs"
import { User, UserCreate, UserResult, UserReturn } from "../interfaces/user.interface"
import format from "pg-format"
import { userReturnSchema } from "../schemas/user.schemas"
import { client } from "../database"
import { QueryResult } from "pg"

export const createUserService = async (data: UserCreate): Promise<UserReturn> => {
    data.password = await hash(data.password, 10)

    const queryFormat: string = format(`
    INSERT INTO "users" (%I) VALUES (%L) RETURNING *;
    `,
    Object.keys(data),
    Object.values(data)
    )
    const queryResult: UserResult = await client.query(queryFormat)

    return userReturnSchema.parse(queryResult.rows[0])
}

export const readUserService = async () => {
    const queryString: string = `SELECT "id", "name","email" FROM "users";`

    const queryResult: QueryResult<User> = await client.query(queryString)
    return queryResult.rows
}