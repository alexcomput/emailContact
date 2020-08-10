import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiKey } from 'react-icons/fi';
import intl from 'react-intl-universal';

import Button from '../../components/Button';
import Input from '../../components/Input';
import FieldSet from '../../components/Fieldset';

import getValidationErros from '../../ultis/getValidationErros';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SingInFormData {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { singIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required(
            'Informe o usuário para acessar o sistema.'
          ),
          password: Yup.string().min(5, 'Senha mínimo 5 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        await singIn({
          username: data.username,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          description: 'Erro ao acessar o sistema',
          title: 'Tenta mais tarde',
        });
      }
    },
    [singIn, useToast]
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <header />
            <h1>{intl.get('login.title')} </h1>

            <strong>{intl.get('login.sub-title')}</strong>

            <FieldSet>
              <div className="field">
                <Input
                  icon={FiUser}
                  label={intl.get('login.inputs.user')}
                  name="username"
                />
              </div>
            </FieldSet>

            <FieldSet>
              <div className="field">
                <Input
                  icon={FiKey}
                  label={intl.get('login.inputs.password')}
                  name="password"
                  type="password"
                  className="passord"
                />
              </div>
            </FieldSet>

            <FieldSet>
              <div className="group-checkbox">
                <div>
                  <label htmlFor="scales">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="scales"
                      name="scales"
                    />
                    {intl.get('login.remindMe')}
                  </label>
                </div>
              </div>
            </FieldSet>

            <Button type="submit"> {intl.get('login.login')}</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Signin;
