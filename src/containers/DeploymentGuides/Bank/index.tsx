import React from 'react';

import Celery from 'containers/DeploymentGuides/Celery';
import Firewall from 'containers/DeploymentGuides/Firewall';
import GatewayInterface from 'containers/DeploymentGuides/GatewayInterface';
import InstallDependencies from 'containers/DeploymentGuides/InstallDependencies';
import NGINX from 'containers/DeploymentGuides/NGINX';
import ProjectSetup from 'containers/DeploymentGuides/ProjectSetup';
import Redis from 'containers/DeploymentGuides/Redis';
import StaticFilesAndApplicationConfiguration from 'containers/DeploymentGuides/StaticFilesAndApplicationConfiguration';
import SystemServices from 'containers/DeploymentGuides/SystemServices';
import Troubleshooting from 'containers/DeploymentGuides/Troubleshooting';

const Bank = () => {
  return (
    <section>
      <h1 className="page-title">Bank Deployment Guide</h1>
      <p>This guide will detail the deployment instructions for banks.</p>
      <InstallDependencies />
      <Firewall />
      <ProjectSetup />
      <NGINX />
      <Redis />
      <GatewayInterface />
      <Celery />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration />
      <Troubleshooting />
    </section>
  );
};

export default Bank;
