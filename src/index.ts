import { spawn, Worker, Thread } from 'threads'

import { WorkerType } from './worker.js'

const worker = await spawn<WorkerType>(new Worker('./worker'))
const result = await worker.add(2, 2)
await Thread.terminate(worker)

console.log(result)
