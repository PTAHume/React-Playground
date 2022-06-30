import axios from "axios";

export class Agent {
  constructor(private userName: string) {}

  async GetCard(): Promise<any> {
    const resp = await axios.get(
      `https://api.github.com/users/${this.userName}`
    )
    return resp.data;
  }
}
