import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/store'
import _ from 'lodash'
import {Editor} from '@craftjs/core'

/*console.log('htmlTesting',ReactDOMServer.renderToString(App))


                              
export const deserializeNodes = (nodes) => {
    return Object.entries(nodes).map(([id, val]) => ({ id, ...val }));
};

export const getNodeById = (nodes ,id) => {
    return _.find(nodes, (node) => node.id === id);
};

export function getDescendants(
    nodes,
    id,
    deep,
    includeOnly,
) {
    function appendChildNode(id, descendants = [], depth  = 0) {
        if (deep || (!deep && depth === 0)) {
            const node = getNodeById(nodes, id);

            if (!node) {
                return descendants;
            }

            if (includeOnly !== 'childNodes') {
                // Include linkedNodes if any
                const linkedNodes = node.linkedNodes;

                _.each(linkedNodes, (nodeId) => {
                    descendants.push(nodeId);
                    descendants = appendChildNode(nodeId, descendants, depth + 1);
                });
            }

            if (includeOnly !== 'linkedNodes') {
                const childNodes = node.nodes;

                _.each(childNodes, (nodeId) => {
                    descendants.push(nodeId);
                    descendants = appendChildNode(nodeId, descendants, depth + 1);
                });
            }

            return descendants;
        }
        return descendants;
    }
    return _.compact(_.map(appendChildNode(id), (nid) => getNodeById(nodes, nid)));
}

export const renderNode = (
        nodes,
    resolver,
    nodeId,
    )=> {
    const node = getNodeById(nodes, nodeId);

    if (!node) {
        throw new Error(`Could not find node with id ${nodeId}`);
    }

    const resolvedComponent = _.get(resolver, (node.type).resolvedName);
    const descendants = getDescendants(nodes, nodeId);
    const children = _.map(descendants, (descendant) => renderNode(nodes, resolver, descendant.id));

    return (
        <NodeProvider key={node.id} id={node.id}>
            {React.createElement(resolvedComponent, { ...node.props, isSSR: true }, children)}
        </NodeProvider>
    );
};

export const renderNodesToJSX = (
        nodes,
    resolve,
    nodeId,
    ) => {
    return (
        <Editor enabled={false} resolver={resolver}>
            {renderNode(nodes, resolve, nodeId)}
        </Editor>
    );
}; */
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
