import { Selector } from 'testcafe';

fixture`Skills Component Test`.page`http://localhost:5174`; // Substitua com o URL de desenvolvimento da sua aplicação

test('Skills component animation should be executed', async (t) => {
  const skillsTextMotionDiv = Selector('.skills-text');

  const initialOpacity = await skillsTextMotionDiv.getStyleProperty('opacity');
  await t.expect(skillsTextMotionDiv.visible).ok();
  await t.wait(3000); // Aumenta o tempo de espera para 5 segundos
  const finalOpacity = await skillsTextMotionDiv.getStyleProperty('opacity');

  await t.expect(initialOpacity).eql('0');
  await t.expect(finalOpacity).eql('0');
});