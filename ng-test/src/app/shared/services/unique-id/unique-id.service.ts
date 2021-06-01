import { Injectable } from "@angular/core";
import {v4 as uuidv4} from "uuid";

@Injectable()
export class UniqueId {

	private numberOfGeneratedIds = 0

	public generatedUniqueIdWithPrefix(prefix: string): string {
		
		if(!prefix) throw Error('Prefix can not be empty')

		const uniqueId = this.generatedUniqueId()
		this.numberOfGeneratedIds++
		return `${prefix} - ${uniqueId}`
	}

	public getNumberOfGeneratedUniqueIds(): number {
			return this.numberOfGeneratedIds;
	}

	private generatedUniqueId(): string {
		return uuidv4()
	}

}

/**
 * 	O objetivo desse serviço é gerar IDs únicos para nossos componentes. 
 * 
 * 
 */