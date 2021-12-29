import * as S from './styles';
import Image from 'next/image';
import { Activities } from './Activities';

function Sections() {
  return (
    <S.Container>
      <S.ContainerActivitieOne>
        <Activities
          title="Seu Guru te concede acesso ao Gympass"
          subtitle="Gympass para autônomos e MEIs."
          desc="Agora profissionais autônomos e MEIs conseguem ter acesso ao Gympass com o Seu Guru! Na nossa plataforma você contrata esse acesso por R$50,00, e no app Gympass você contrata o plano que mais fizer sentido para você, por a partir de R$39,90 mensais."
          image="/images/google.png"
        />
      </S.ContainerActivitieOne>

      <S.ContainerActivitieTwo>
        <Activities
          title="Muitas atividades para se sentir bem"
          desc="Gympass é muito mais que uma rede gigante de academias pelo país inteiro – é uma ferramenta que vai te ajudar a melhorar seu bem-estar, com aplicativos, aulas e planos personalizados."
          image="/images/good.png"
          position={true}
        />
      </S.ContainerActivitieTwo>
      <S.ContainerInformations>
        <S.ContentInformations>
          <S.Content>
            <S.Icon>
              <Image
                src="/images/locale.png"
                width={35}
                height={35}
                alt="Mais de 9.000 academias"
              />
            </S.Icon>
            <div>
              <S.Title>Mais de 9.000 academias</S.Title>
              <S.Paragraph>
                Faça check-in sempre que quiser em qualquer uma das
                <br /> academias disponíveis no plano que você escolher.
              </S.Paragraph>
            </div>
          </S.Content>
          <S.Content>
            <S.Icon>
              <Image
                src="/images/bussines.png"
                width={35}
                height={35}
                alt="Acesso exclusivo"
              />
            </S.Icon>
            <div>
              <S.Title>Acesso exclusivo</S.Title>
              <S.Paragraph>
                O Gympass só está disponível para autônomos e MEIs com
                <br /> CNPJ através da Seu Guru.
              </S.Paragraph>
            </div>
          </S.Content>
        </S.ContentInformations>
      </S.ContainerInformations>
    </S.Container>
  );
}

export { Sections };
