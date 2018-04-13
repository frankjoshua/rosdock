import { RosConfigModule } from './ros-config.module';

describe('RosConfigModule', () => {
  let rosConfigModule: RosConfigModule;

  beforeEach(() => {
    rosConfigModule = new RosConfigModule();
  });

  it('should create an instance', () => {
    expect(rosConfigModule).toBeTruthy();
  });
});
