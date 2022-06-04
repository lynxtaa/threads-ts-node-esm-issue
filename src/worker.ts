import { parentPort, workerData } from 'node:worker_threads'

const [a, b] = workerData

parentPort?.postMessage(a + b)
