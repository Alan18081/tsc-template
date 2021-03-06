import {injectable} from 'inversify';
import * as bcrypt from 'bcrypt';

@injectable()
export class HashService {

    private readonly ROUNDS = 10;

    async generateHash(str: string): Promise<string> {
        return await bcrypt.hash(str, this.ROUNDS);
    }

    async compareHash(str: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(str, hash);
    }
}