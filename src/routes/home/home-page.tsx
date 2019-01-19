import { Component, Prop, State } from "@stencil/core";
import { IUser } from "../../userTunnel";

@Component({
  tag: "home-page"
})
export class HomePage {
  @Prop() user: IUser;

  @State() activeTag?: string;

  setTag = (tag?: string) => {
    this.activeTag = tag;
  };

  render() {
    return (
      <main class="home-page">
        <div class="banner">
          <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div class="container page">
          <div class="row">
            <home-feed
              class="col-md-9"
              user={this.user}
              clearTag={this.setTag}
              activeTag={this.activeTag}
            />
            <home-tags class="col-md-3" setTag={this.setTag} />
          </div>
        </div>
      </main>
    );
  }
}
