export const enum ShapeFlags {
  ELEMENT = 1, // 表示该虚拟节点是一个 DOM 元素节点。
  FUNCTIONAL_COMPONENT = 1 << 1, // 表示该虚拟节点是一个函数式组件。
  STATEFUL_COMPONENT = 1 << 2, // 表示该虚拟节点是一个有状态的组件。
  TEXT_CHILDREN = 1 << 3, // 表示该虚拟节点拥有文本子节点。
  ARRAY_CHILDREN = 1 << 4, // 表示该虚拟节点拥有数组类型的子节点。
  SLOTS_CHILDREN = 1 << 5, // 表示该虚拟节点拥有插槽类型的子节点。
  TELEPORT = 1 << 6, // 表示该虚拟节点是一个传送门（Teleport）。
  SUSPENSE = 1 << 7, // 表示该虚拟节点是一个悬挂（Suspense）节点。
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 表示该虚拟节点的组件应该保持活跃状态。
  COMPONENT_KEPT_ALIVE = 1 << 9, // 表示该虚拟节点的组件被保持活跃状态。
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT // 表示该虚拟节点是一个组件，可以是有状态的组件或函数式组件。
}
