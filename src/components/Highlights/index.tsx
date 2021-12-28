import * as S from './styles';
import { Boxes } from './Boxes';
import { HighlightsList } from '../../utils/highlights';

function Highlights() {
  return (
    <S.Container>
      <S.Title>
        Pela primeira vez, acesso ao Gympass
        <br /> para profissionais autônomos.
      </S.Title>

      <S.ContentBoxes>
        {HighlightsList &&
          HighlightsList.map(({ title, desc, icon, color }, index) => {
            return (
              <Boxes
                title={title}
                desc={desc}
                icon={icon}
                step={index + 1}
                key={title}
                color={color}
              />
            );
          })}
      </S.ContentBoxes>
    </S.Container>
  );
}

export { Highlights };
