import { members } from "./membersSlice";

describe("ADD_MEMBER", () => {
  test("member should add to empty state", () => {
    const a_member = {
      name: "Alan Kay",
      born: "May 17, 1940",
      bio: "Alan Curtis Kay is an American computer scientist.",
      id: "1",
    };

    const state_after_add_member = [
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    expect(members([], { type: "ADD_MEMBER", payload: a_member })).toEqual(
      state_after_add_member
    );
  });

  test("member should add to non empty state", () => {
    const a_member = {
      name: "Alan Kay",
      born: "May 17, 1940",
      bio: "Alan Curtis Kay is an American computer scientist.",
      id: "1",
    };

    const previous_state = [
      {
        name: "Edsger W. Dijkstra",
        born: "May 11, 1930",
        bio: "Edsger Wybe Dijkstra was a Dutch computer scientist.",
        id: "2",
      },
    ];

    const state_after_add_member = [
      {
        name: "Edsger W. Dijkstra",
        born: "May 11, 1930",
        bio: "Edsger Wybe Dijkstra was a Dutch computer scientist.",
        id: "2",
      },
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    expect(
      members(previous_state, { type: "ADD_MEMBER", payload: a_member })
    ).toEqual(state_after_add_member);
  });
});

describe("DELETE_MEMBER", () => {
  test("member should delete from state", () => {
    const state_before_delete_member = [
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    expect(
      members(state_before_delete_member, {
        type: "DELETE_MEMBER",
        payload: "1",
      })
    ).toEqual([]);
  });
});

describe("UPDATE_MEMBER", () => {
  test("Update a single key", () => {
    const state_before_update_member = [
      {
        name: "Edsger W. Dijkstra",
        born: "May 11, 1940",
        bio: "Edsger Wybe Dijkstra was a Dutch computer scientist.",
        id: "2",
      },
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    const state_after_update_member = [
      {
        name: "Edsger W. Dijkstra",
        born: "May 11, 1930",
        bio: "Edsger Wybe Dijkstra was a Dutch computer scientist.",
        id: "2",
      },
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    expect(
      members(state_before_update_member, {
        type: "UPDATE_MEMBER",
        payload: { id: "2", born: "May 11, 1930" },
      })
    ).toEqual(state_after_update_member);
  });

  test("update multiple key", () => {
    const state_before_update_member = [
      {
        name: "Edsger W. Dijkstra",
        born: "May 11, 1940",
        bio: "Edsger Wybe Dijkstra was a Dutch computer scientist.",
        id: "2",
      },
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    const state_after_update_member = [
      {
        name: "Edsger W. Dijkstra",
        born: "May 11, 1930",
        bio: "Edsger Wybe Dijkstra was a Dutch computer scientist, programmer",
        id: "2",
      },
      {
        name: "Alan Kay",
        born: "May 17, 1940",
        bio: "Alan Curtis Kay is an American computer scientist.",
        id: "1",
      },
    ];

    expect(
      members(state_before_update_member, {
        type: "UPDATE_MEMBER",
        payload: {
          id: "2",
          born: "May 11, 1930",
          bio: "Edsger Wybe Dijkstra was a Dutch computer scientist, programmer",
        },
      })
    ).toEqual(state_after_update_member);
  });
});
