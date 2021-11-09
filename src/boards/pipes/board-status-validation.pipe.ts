import { BoardStatus } from './../board.model';
import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';

export class BoardStatusValidationPipe implements PipeTransform {
  // 접두사(prefix) readonly는 속성을 읽기 전용으로 만듭니다. 따라서 이 값은 클래스 외부에서 액세스 할 수 있지만 변경할 수 없습니다.
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
