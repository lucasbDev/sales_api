import auth from '@config/auth';
import nodemailer from 'nodemailer';
import HandlebarsMailTemplate from './HandleBarsMailTemplate';

interface ISendMail {
    to: IMailContact;
    from?: IMailContact;
    subject: string;
    templeteData: IParseMailTemplate
}

interface IMailContact {
    name: string;
    email: string;
}

interface ITemplateVariable {
    [key: string]: string | number
}


interface IParseMailTemplate {
    template: string;
    variables: ITemplateVariable;
}


export default class EtherealMail {
    static async sendMail({to, from, subject, templeteData}: ISendMail): Promise<void> {
        const account = await nodemailer.createTestAccount();

        const mailTemplate = new HandlebarsMailTemplate()

        const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass,
            }
        })
        const message = await transporter.sendMail({
            from: {
                name: from?.name || 'api',
                address: from?.email || 'equipo@gmail.com.br',
            },
            to: {
                name: to.name,
                address: to.email,
            },
            subject: 'curso de node',
            text: await mailTemplate.parse(templeteData),
        });

        console.log('Message sent: %s',message.messageId)
        console.log('Preview URL: %s',nodemailer.getTestMessageUrl(message));
    }
}