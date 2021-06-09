import { Injectable } from "@angular/core";
import {v4 as uuidv4} from "uuid";

@Injectable()
export class UniqueIdService {

	private numberOfGeneratedIds = 0

	private validId = /^[A-Za-z]+[\w\-\:\.]*$/ 

	public generatedUniqueIdWithPrefix(prefix: string): string {
		
		if(!prefix || !this.validId.test(prefix)) throw Error('Prefix can not be empty')

		const uniqueId = this.generatedUniqueId()
		this.numberOfGeneratedIds++
		return `${prefix}-${uniqueId}`
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