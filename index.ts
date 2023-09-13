console.log("Hello via Bun!");

Bun.serve({
    fetch(req: Request) {
        return new Response("Success!");
    }
})