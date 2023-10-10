import { render, screen } from '@testing-library/react';
import CreateAction from '../CreateAction';

import userEvent from '@testing-library/user-event';
import { ACTION_TIME_OPTIONS } from '../../constants/action';

describe('', () => {
  it('행동시간 선택창이 나오는지 확인', async () => {
    const user = userEvent.setup();
    const suffix = '분';

    render(<CreateAction />);

    const selectElements = screen.getByTestId('timepercycle');
    const button = screen.getByRole('button', {
      name: '행동 시간을 선택해주세요',
    });
    expect(button).toBeInTheDocument();

    await user.click(button);

    const option = screen.getByText(ACTION_TIME_OPTIONS[0] + suffix);
    expect(option).toBeInTheDocument();
  });

  // 여기서 셀렉트 박스를 눌렀을 때 몇개가 나오는지 확인하는 것이 맞을까?
});
