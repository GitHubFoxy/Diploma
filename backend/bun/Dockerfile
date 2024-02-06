FROM oven/bun:alpine

WORKDIR /bun

COPY package*.json ./

RUN bun install

USER bun

COPY --chown=bun:bun . ./

EXPOSE 3000

CMD ["bun", "src/index.ts"] 

