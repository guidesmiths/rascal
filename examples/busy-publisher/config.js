module.exports = {
  vhosts: {
    "/": {
      publicationChannelPools: {
        confirmPool: {
          max: 10,
          min: 10,
          evictionRunIntervalMillis: 1000,
          idleTimeoutMillis: 5000,
          autostart: true
        }
      },
      connection: {
        heartbeat: 5,
        socketOptions: {
          timeout: 1000
        }
      },
      exchanges: ["demo_ex"],
      queues: ["demo_q"],
      bindings: [
        "demo_ex[a.b.c] -> demo_q"
      ],
      publications: {
        demo_pub: {
          exchange: "demo_ex",
          routingKey: "a.b.c",
          confirm: false,
          options: {
            persistent: false
          }
        }
      },
      subscriptions: {
        demo_sub: {
          queue: "demo_q"
        }
      }
    }
  }
}

