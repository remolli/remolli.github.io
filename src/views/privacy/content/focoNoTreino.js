const CONTACT_EMAIL = 'remollievandro@gmail.com'
const EFFECTIVE_DATE = '2026-08-23'

const thirdPartyLinks = [
    { label: 'AdMob', url: 'https://policies.google.com/technologies/partner-sites' },
    { label: 'Google Analytics for Firebase', url: 'https://firebase.google.com/support/privacy' },
    { label: 'Firebase Crashlytics', url: 'https://firebase.google.com/support/privacy/' }
]

export const pt = {
    appName: 'Foco no Treino',
    title: 'Política de Privacidade',
    documentTitle: 'Política de Privacidade — Foco no Treino',
    htmlLang: 'pt-BR',
    backLabel: 'Voltar ao portfólio',
    effectiveDateLabel: 'Esta política de privacidade entra em vigor em',
    effectiveDate: EFFECTIVE_DATE,
    generatedBy: {
        before: 'Esta página de política de privacidade foi gerada pelo ',
        label: 'App Privacy Policy Generator',
        url: 'https://app-privacy-policy-generator.nisrulz.com/'
    },
    sections: [
        {
            title: null,
            blocks: [
                { type: 'p', text: 'Esta política de privacidade se aplica ao aplicativo Foco no Treino para dispositivos móveis, junto com quaisquer serviços relacionados operados pela Remolli Tech (em conjunto, o "Aplicativo"). A Remolli Tech é aqui denominada "Prestador de Serviço".' }
            ]
        },
        {
            title: 'Coleta e Uso de Informações',
            blocks: [
                { type: 'p', text: 'O Aplicativo coleta informações quando você o baixa e utiliza. Essas informações podem incluir:' },
                { type: 'ul', items: [
                    'O endereço de Protocolo de Internet (IP) do seu dispositivo',
                    'As páginas do Aplicativo que você visita, a data e a hora da visita e o tempo gasto nessas páginas',
                    'O tempo gasto no Aplicativo',
                    'O sistema operacional móvel que você utiliza'
                ] }
            ]
        },
        {
            title: 'Cookies e tecnologias de rastreamento',
            blocks: [
                { type: 'p', text: 'O Aplicativo ou seus SDKs de terceiros podem usar cookies, SDKs, pixels e tecnologias semelhantes para viabilizar funcionalidades, análises ou a entrega do serviço. Quando exigido pela legislação aplicável, o Prestador de Serviço obterá consentimento antes de usar tecnologias de rastreamento não essenciais.' }
            ]
        },
        {
            title: 'Seus Direitos',
            blocks: [
                { type: 'p', text: `Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais mantidos pelo Prestador de Serviço. Para exercer esses direitos, ou para retirar o consentimento quando o tratamento for baseado em consentimento, entre em contato com o Prestador de Serviço pelo e-mail ${CONTACT_EMAIL}.` }
            ]
        },
        {
            title: 'Seus direitos de privacidade na Califórnia (CCPA/CPRA)',
            blocks: [
                { type: 'p', text: `Se você é residente da Califórnia, tem o direito de saber quais informações pessoais são coletadas, o direito de excluir informações pessoais, o direito de recusar a venda ou o compartilhamento de informações pessoais e o direito à não discriminação por exercer esses direitos. Para exercer seus direitos sob a CCPA/CPRA, entre em contato com o Prestador de Serviço pelo e-mail ${CONTACT_EMAIL}.` },
                { type: 'p', text: 'O Prestador de Serviço pode usar as informações que você fornece para enviar informações importantes, avisos obrigatórios e, quando permitido por lei, comunicações de marketing.' },
                { type: 'p', text: 'Para uma melhor experiência ao usar o Aplicativo, o Prestador de Serviço pode solicitar que você forneça determinadas informações de identificação pessoal, incluindo, entre outras, nome, altura, peso, idade e gênero. As informações solicitadas pelo Prestador de Serviço serão retidas e utilizadas conforme descrito nesta política de privacidade.' }
            ]
        },
        {
            title: 'Acesso de Terceiros',
            blocks: [
                { type: 'p', text: 'Apenas dados agregados e anonimizados são transmitidos periodicamente a serviços externos para ajudar o Prestador de Serviço a melhorar o Aplicativo e o seu serviço. O Prestador de Serviço pode compartilhar suas informações com terceiros das formas descritas nesta declaração de privacidade.' }
            ]
        },
        {
            title: 'Transferências Internacionais de Dados',
            blocks: [
                { type: 'p', text: 'O Prestador de Serviço ou seus prestadores de serviço terceirizados podem transferir dados pessoais para países fora do seu país de residência, inclusive fora do Espaço Econômico Europeu (EEE). Quando a legislação aplicável exigir salvaguardas para transferências internacionais, o Prestador de Serviço utilizará mecanismos apropriados:' },
                { type: 'ul', items: [
                    'Cláusulas Contratuais Padrão (SCCs) aprovadas pela Comissão Europeia',
                    'Decisões de adequação ou outros mecanismos de transferência legalmente reconhecidos',
                    'Seu consentimento, quando exigido e legalmente permitido'
                ] },
                { type: 'p', text: 'As leis de proteção de dados de outros países podem diferir das da sua jurisdição. Quando exigido por lei, o Prestador de Serviço aplicará salvaguardas apropriadas e obterá qualquer consentimento necessário para a transferência.' }
            ]
        },
        {
            title: 'Serviços de Terceiros',
            blocks: [
                { type: 'p', text: 'Observe que o Aplicativo utiliza serviços de terceiros que possuem suas próprias Políticas de Privacidade sobre o tratamento de dados. Abaixo estão os links para as Políticas de Privacidade dos serviços de terceiros usados pelo Aplicativo:' },
                { type: 'links', items: thirdPartyLinks }
            ]
        },
        {
            title: 'Divulgação de Informações',
            blocks: [
                { type: 'p', text: 'O Prestador de Serviço pode divulgar as Informações Fornecidas pelo Usuário e as Coletadas Automaticamente:' },
                { type: 'ul', items: [
                    'conforme exigido por lei, como para cumprir uma intimação ou processo legal semelhante;',
                    'quando acreditar de boa-fé que a divulgação é necessária para proteger seus direitos, proteger sua segurança ou a de terceiros, investigar fraudes ou responder a uma solicitação governamental;',
                    'com seus prestadores de serviço de confiança que trabalham em seu nome, não fazem uso independente das informações divulgadas a eles e concordaram em seguir as regras estabelecidas nesta declaração de privacidade.'
                ] }
            ]
        },
        {
            title: 'Direitos de Exclusão (Opt-Out)',
            blocks: [
                { type: 'p', text: 'Você pode interromper qualquer coleta adicional de informações do seu dispositivo móvel desinstalando o Aplicativo. A desinstalação impedirá que o Aplicativo colete dados do seu dispositivo, mas não exclui automaticamente as informações que já foram transmitidas ao Prestador de Serviço ou a terceiros.' },
                { type: 'p', text: `Para solicitar a exclusão dos seus dados pessoais, retirar o consentimento ou exercer qualquer um dos seus direitos, entre em contato com o Prestador de Serviço pelo e-mail ${CONTACT_EMAIL}.` }
            ]
        },
        {
            title: 'Política de Retenção de Dados',
            blocks: [
                { type: 'p', text: 'O Prestador de Serviço retém dados pessoais conforme a necessidade para as finalidades declaradas:' },
                { type: 'ul', items: [
                    'Dados Fornecidos pelo Usuário: retidos durante o período de uso do Aplicativo mais 12 meses após esse período, salvo se retenção mais longa for exigida por lei',
                    'Dados Coletados Automaticamente: retidos por até 24 meses a partir da coleta, salvo se retenção mais longa for necessária para cumprimento legal',
                    'Dados Agregados e Anonimizados: retidos indefinidamente, pois já não identificam você',
                    'Dados necessários para cumprimento legal: retidos pelo tempo exigido pela legislação aplicável'
                ] },
                { type: 'p', text: `Você pode solicitar a exclusão dos seus dados pessoais, sujeita a qualquer obrigação legal de retenção. Se desejar que o Prestador de Serviço exclua os Dados Fornecidos pelo Usuário enviados por meio do Aplicativo, entre em contato pelo e-mail ${CONTACT_EMAIL}. Observe que alguns Dados Fornecidos pelo Usuário podem ser necessários para o funcionamento adequado do Aplicativo.` }
            ]
        },
        {
            title: 'Crianças',
            blocks: [
                { type: 'p', text: 'O Aplicativo não se destina a crianças menores de 13 anos, ou a idade superior exigida pela legislação aplicável. O Prestador de Serviço não solicita dados de crianças de forma consciente nem divulga o Aplicativo para elas.' },
                { type: 'p', text: `Quando o consentimento dos pais ou responsáveis for exigido pela legislação aplicável, o Aplicativo não se destina ao uso sem esse consentimento. O Prestador de Serviço não coleta conscientemente informações de identificação pessoal de crianças menores de 13 anos em violação à legislação aplicável. Caso o Prestador de Serviço descubra que uma criança forneceu informações pessoais, essas informações serão imediatamente excluídas de seus servidores. Se você é pai, mãe ou responsável e sabe que sua criança forneceu informações pessoais ao Prestador de Serviço, entre em contato (${CONTACT_EMAIL}) para que as providências necessárias possam ser tomadas.` }
            ]
        },
        {
            title: 'Segurança',
            blocks: [
                { type: 'p', text: 'O Prestador de Serviço se preocupa em salvaguardar a confidencialidade das suas informações. O Prestador de Serviço adota salvaguardas físicas, eletrônicas e procedimentais para proteger as informações que processa e mantém.' }
            ]
        },
        {
            title: 'Notificação de Violação de Dados',
            blocks: [
                { type: 'p', text: 'Se ocorrer uma violação de dados que afete seus dados pessoais, o Prestador de Serviço notificará você de acordo com os requisitos legais aplicáveis, incluindo, quando exigido, informações sobre a natureza da violação e as medidas adotadas para tratá-la.' }
            ]
        },
        {
            title: 'Alterações',
            blocks: [
                { type: 'p', text: 'O Prestador de Serviço pode atualizar esta Política de Privacidade periodicamente. O Prestador de Serviço notificará você sobre alterações relevantes publicando a Política de Privacidade atualizada com uma data de vigência. Quando exigido por lei, o Prestador de Serviço solicitará seu consentimento para alterações relevantes antes que elas entrem em vigor.' },
                { type: 'p', text: `Versões anteriores desta Política de Privacidade serão mantidas e disponibilizadas mediante solicitação ao Prestador de Serviço pelo e-mail ${CONTACT_EMAIL}.` }
            ]
        },
        {
            title: 'Seu Consentimento',
            blocks: [
                { type: 'p', text: 'Quando o tratamento for baseado em consentimento, você o fornece ao optar afirmativamente pelo recurso ou ação correspondente. Você pode retirar o consentimento a qualquer momento, sem afetar o tratamento realizado antes da retirada. O tratamento baseado em outras bases legais é realizado conforme descrito acima.' }
            ]
        },
        {
            title: 'Fale Conosco',
            blocks: [
                { type: 'p', text: `Se você tiver dúvidas sobre privacidade ao usar o Aplicativo, ou dúvidas sobre as práticas adotadas, entre em contato com o Prestador de Serviço por e-mail em ${CONTACT_EMAIL}.` }
            ]
        }
    ]
}

export const en = {
    appName: 'Foco no Treino',
    title: 'Privacy Policy',
    documentTitle: 'Privacy Policy — Foco no Treino',
    htmlLang: 'en',
    backLabel: 'Back to portfolio',
    effectiveDateLabel: 'This privacy policy is effective as of',
    effectiveDate: EFFECTIVE_DATE,
    generatedBy: {
        before: 'This privacy policy page was generated by ',
        label: 'App Privacy Policy Generator',
        url: 'https://app-privacy-policy-generator.nisrulz.com/'
    },
    sections: [
        {
            title: null,
            blocks: [
                { type: 'p', text: 'This privacy policy applies to the Foco no Treino app for mobile devices, together with any related services operated by Remolli Tech (collectively, the "Application"). Remolli Tech is hereby referred to as the "Service Provider".' }
            ]
        },
        {
            title: 'Information Collection and Use',
            blocks: [
                { type: 'p', text: 'The Application collects information when you download and use it. This information may include information such as' },
                { type: 'ul', items: [
                    "Your device's Internet Protocol address",
                    'The pages of the Application that you visit, the time and date of your visit, the time spent on those pages',
                    'The time spent on the Application',
                    'your mobile operating system you use'
                ] }
            ]
        },
        {
            title: 'Cookies and tracking technologies',
            blocks: [
                { type: 'p', text: 'The Application or its third-party SDKs may use cookies, SDKs, pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will obtain consent before using non-essential tracking technologies.' }
            ]
        },
        {
            title: 'Your Rights',
            blocks: [
                { type: 'p', text: `You may request access to, correction of, or deletion of your personal data held by the Service Provider. To exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider at ${CONTACT_EMAIL}.` }
            ]
        },
        {
            title: 'Your California privacy rights (CCPA/CPRA)',
            blocks: [
                { type: 'p', text: `If you are a California resident, you have the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising these rights. To exercise your CCPA/CPRA rights, contact the Service Provider at ${CONTACT_EMAIL}.` },
                { type: 'p', text: 'The Service Provider may use the information you provide to send important information, required notices, and, where permitted by law, marketing communications.' },
                { type: 'p', text: 'For a better experience while using the Application, the Service Provider may require you to provide certain personally identifiable information, including but not limited to name, height, weight, age, gender. The information the Service Provider requests will be retained and used as described in this privacy policy.' }
            ]
        },
        {
            title: 'Third Party Access',
            blocks: [
                { type: 'p', text: 'Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.' }
            ]
        },
        {
            title: 'International Data Transfers',
            blocks: [
                { type: 'p', text: 'The Service Provider or its third-party service providers may transfer personal data to countries outside your country of residence, including outside the European Economic Area (EEA). Where applicable law requires safeguards for international transfers, the Service Provider will use appropriate mechanisms.' },
                { type: 'ul', items: [
                    'Standard Contractual Clauses (SCCs) approved by the European Commission',
                    'Adequacy decisions or other legally recognized transfer mechanisms',
                    'Your consent, where required and legally permitted'
                ] },
                { type: 'p', text: 'Data protection laws in other countries may differ from those in your jurisdiction. Where required by law, the Service Provider will apply appropriate safeguards and obtain any consent required for the transfer.' }
            ]
        },
        {
            title: 'Third Party Services',
            blocks: [
                { type: 'p', text: 'Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:' },
                { type: 'links', items: thirdPartyLinks }
            ]
        },
        {
            title: 'Disclosure of Information',
            blocks: [
                { type: 'p', text: 'The Service Provider may disclose User Provided and Automatically Collected Information:' },
                { type: 'ul', items: [
                    'as required by law, such as to comply with a subpoena, or similar legal process;',
                    'when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;',
                    'with their trusted services providers who work on their behalf, do not have an independent use of the information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this privacy statement.'
                ] }
            ]
        },
        {
            title: 'Opt-Out Rights',
            blocks: [
                { type: 'p', text: 'You can stop further collection of information from your mobile device by uninstalling the Application. Uninstalling will stop the Application from collecting data from your device, but it does not automatically delete information that has already been transmitted to the Service Provider or to third parties.' },
                { type: 'p', text: `To request deletion of your personal data, to withdraw consent, or to exercise any of your rights, contact the Service Provider at ${CONTACT_EMAIL}.` }
            ]
        },
        {
            title: 'Data Retention Policy',
            blocks: [
                { type: 'p', text: 'The Service Provider retains personal data based on its necessity for the stated purposes:' },
                { type: 'ul', items: [
                    'User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law',
                    'Automatically Collected Data: Retained for up to 24 months from collection, unless longer retention is required for legal compliance',
                    'Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you',
                    'Data required for legal compliance: Retained as long as required by applicable law'
                ] },
                { type: 'p', text: `You may request deletion of your personal data, subject to any legal obligation to retain it. If you want the Service Provider to delete User Provided Data submitted through the Application, please contact them at ${CONTACT_EMAIL}. Please note that some User Provided Data may be required for the Application to function properly.` }
            ]
        },
        {
            title: 'Children',
            blocks: [
                { type: 'p', text: 'The Application is not intended for children under 13 years of age, or such higher age as required by applicable law. The Service Provider does not knowingly solicit data from children or market the Application to them.' },
                { type: 'p', text: `Where parental or guardian consent is required under applicable law, the Application is not intended for use without that consent. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age in violation of applicable law. In the event the Service Provider discovers that a child has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided the Service Provider with personal information, please contact the Service Provider (${CONTACT_EMAIL}) so that they will be able to take the necessary actions.` }
            ]
        },
        {
            title: 'Security',
            blocks: [
                { type: 'p', text: 'The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.' }
            ]
        },
        {
            title: 'Data Breach Notification',
            blocks: [
                { type: 'p', text: 'If a data breach occurs that affects your personal data, the Service Provider will notify you in accordance with applicable legal requirements, including, where required, providing information about the nature of the breach and the steps being taken to address it.' }
            ]
        },
        {
            title: 'Changes',
            blocks: [
                { type: 'p', text: 'The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.' },
                { type: 'p', text: `Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at ${CONTACT_EMAIL}.` }
            ]
        },
        {
            title: 'Your Consent',
            blocks: [
                { type: 'p', text: 'Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant feature or action. You may withdraw consent at any time without affecting processing carried out before withdrawal. Processing based on other lawful bases is carried out as described above.' }
            ]
        },
        {
            title: 'Contact Us',
            blocks: [
                { type: 'p', text: `If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at ${CONTACT_EMAIL}.` }
            ]
        }
    ]
}

export default { pt, en }
