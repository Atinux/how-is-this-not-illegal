## How is this not illegal (Nuxt)

My personal attempt to use Postgres directly from a Nuxt Server Component.

Based from [Guillermo](https://github.com/rauchg)'s [How is this not illegal](https://github.com/Atinux/how-is-this-not-illegal) Next.js example.

**Bonus**: I added an input to dynamically control the limit returned by the server component :sparkes:

## Setting it up

1. Create a Vercel Postgres database and link it to your project
2. Go to its settings and copy the `psql` command
3. Add `-f sql/init.sql` like so to populate the database with some data:
   ```sh
   psql "postgres://{user}:{password}@{name}.{location}.postgres.vercel-storage.com:5432/verceldb" -f init.sql
   ```

## Running it locally

```
pnpm i
pnpm dev
```