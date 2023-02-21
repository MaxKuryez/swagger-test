import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import NavigationLinks from '../../layout/navigationLinks/navigationLinks';
import { StyledContainer, StyledPath, StyledAccordionSummary } from "./styled";
import { MethodData, PathInfo } from './types'; 
import { API_URL, PROJECT_ENDPOINTS } from 'endpoints';

const PathPage = () => {
  const [info, setInfo] = useState<PathInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}${PROJECT_ENDPOINTS.INFO_JSON}`);
      const data = await response.json();
      const paths = data.paths;

      const pathInfo: PathInfo[] = [];

      Object.entries(paths).forEach(([path, pathMethods]) => {
        Object.entries(pathMethods as MethodData[]).forEach(([method, methodData]) => {
          pathInfo.push({
            path,
            method,
            summary: methodData.summary,
            description: methodData.description,
            parameters: methodData.parameters,
            responses: methodData.responses,
          });
        });
      });

      setInfo(pathInfo);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationLinks />
      <StyledContainer>
        <h2>API Paths</h2>
        {info.map(({summary, description, responses, parameters, method, path}, index) => (
          <StyledPath key={index}>
            <Accordion>
              <StyledAccordionSummary>
                <Typography>{`${method.toUpperCase()} ${path}`}</Typography>
              </StyledAccordionSummary>
              <AccordionDetails>
                <div>
                  <h4>{summary}</h4>
                  <p>{description}</p>
                  <div>
                    {parameters && parameters.length > 0 && (
                      <>
                        <h4>Parameters:</h4>
                        <ul>
                          {parameters.map((parameter, index) => (
                            <li key={index}>{JSON.stringify(parameter)}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div>
                    {responses && Object.keys(responses).length > 0 && (
                      <>
                        <h4>Responses:</h4>
                        <ul>
                          {Object.entries(responses).map(([code, response], index) => (
                            <li key={index}>
                              <b>{code}:</b> {JSON.stringify(response.description)}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </StyledPath>
        ))}
      </StyledContainer>
    </>
  );
};

export default PathPage;
