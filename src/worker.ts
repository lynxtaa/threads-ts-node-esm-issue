import { expose } from 'threads/worker'

const worker = {
	add(a: number, b: number): number {
		return a + b
	},
}

export type WorkerType = typeof worker

expose(worker)
