import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Daniel Leme"
            date="04/03/2019"
            content="1, 2, 3, testando...som...teste!!"
          />
        ))}

        <ChannelMessage
          author="Daniel Leme"
          date="22/06/2020"
          content={
            <>
              <Mention>@everyone</Mention>, NÃO ASSISTA ESSE ANIME......?
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Beto"
          date="22/06/2019"
          content="1, 2, 3, testando...som...teste!!"
        />

        <ChannelMessage
          author="Beatriz"
          date="22/06/2020"
          content={
            <>
              <Mention>@Daniel Leme</Mention>, Agora vai ?
            </>
          }
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;