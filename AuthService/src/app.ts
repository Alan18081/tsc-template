import 'reflect-metadata';
import { connect } from 'amqplib';
import { messageBroker } from './helpers/message-broker';
import {config} from '@astra/common';
import { AppModule } from './app.module';

class AuthService {

    private readonly appModule = new AppModule();

    constructor() {
        this.initBroker();
    }

    async initBroker() {
        try {
            const connection = await connect(config.rabbitmq.url);
            await messageBroker.run(connection);
            console.log('AuthService is working');
        } catch (e) {
            console.log('[AMQP] Failed to create connection: ', e.message);
        }
    }
}

new AuthService();